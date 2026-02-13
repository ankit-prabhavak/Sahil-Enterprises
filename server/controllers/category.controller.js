import CategoryModel from "../models/category.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret, // Click 'View API Keys' above to copy your API secret
  secure: true,
});

// image upload
var imagesArr = [];
export async function uploadCategoryImages(request, response) {
  try {
    imagesArr = [];

    const image = request.files;

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    for (let i = 0; i < image?.length; i++) {
      const img = await cloudinary.uploader.upload(
        image[i].path,
        options,
        function (error, result) {
          imagesArr.push(result.secure_url);
          fs.unlinkSync(`uploads/${request.files[i].filename}`);
          console.log(request.files[i].filename);
        },
      );
    }

    return response.status(200).json({
      images: imagesArr,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// create category
export async function createCategory(request, response) {
  try {
    let category = new CategoryModel({
      name: request.body.name,
      images: imagesArr,
      parentCatName: request.body.parentCatName,
      parentId: request.body.parentId,
    });

    if (!category) {
      return response.status(500).json({
        message: "category not created",
        error: true,
        success: false,
      });
    }

    category = await category.save();
    imagesArr = [];

    return response.status(200).json({
      message: "Category created",
      error: false,
      success: true,
      category: category,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get category
export async function getCategories(reqest, response) {
  try {
    const categories = await CategoryModel.find();

    const categoryMap = {};

    categories.forEach((cat) => {
      categoryMap[cat._id] = { ...cat._doc, children: [] };
    });

    const rootCategories = [];

    categories.forEach((cat) => {
      if (cat.parentId) {
        categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
      } else {
        rootCategories.push(categoryMap[cat._id]);
      }
    });

    return response.status(200).json({
      message: "Successfully fetched category data.",
      error: false,
      success: true,
      data: rootCategories,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

//  category count
export async function getCategoriesCount(request, response) {
  try {
    const categoryCount = await CategoryModel.countDocuments({
      parentId: undefined,
    }); // only get cat not subcat

    if (!categoryCount) {
      return response.status(500).json({
        message: error.message || error,
        error: true,
        success: false,
      });
    }

    return response.status(200).send({
      categoryCount: categoryCount,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// sub category
// export async function getSubCategoriesCount(request, response) {
//   try {
//     const categories = await CategoryModel.find(); // get all parent cat

//     if (!categories) {
//       return response.status(500).json({
//         message: error.message || error,
//         error: true,
//         success: false,
//       });
//     }

//     const subCatList = [];
//     for (let cat of categories) {
//       if (cat.parentId) {
//         subCatList.push(cat);
//       }
//     }

//     return response.status(200).send({
//       subCategoryCount: subCatList.length,
//     });
//   } catch (error) {
//     return response.status(500).json({
//       message: error.message || error,
//       error: true,
//       success: false,
//     });
//   }
// }

export async function getSubCategoriesCount(request, response) {
  try {
    const { parentId } = request.params; // Electronics id

    const count = await CategoryModel.countDocuments({
      parentId: parentId,
    });

    return response.status(200).json({
      subCategoryCount: count,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get single category
export async function getCategory(request, response) {
  try {
    const category = await CategoryModel.findById(request.params.id);

    if (!category) {
      return response.status(500).json({
        message: "No such category!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Category Fetch Successful",
      error: false,
      success: true,
      category: category,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

async function deleteImagesOfCategory(category) {
  if (!category.images || category.images.length === 0) return;

  for (let imgUrl of category.images) {
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];

    if (imageName) {
      await cloudinary.uploader.destroy(imageName);
    }
  }
}

// DELETE /deleteImage/698ccb5c4e996fe1c4830b9c?img=https://res.cloudinary.com/....
export async function removeImageFromCloudinary(request, response) {
  try {
    const categoryId = request.params.id;

    const category = await CategoryModel.findOne({ _id: categoryId });

    if (!category) {
      return response.status(404).json({
        message: "Category Not Found",
        error: true,
        success: false,
      });
    }

    // const imgUrl = request.query.img;

    // if (!imgUrl) {
    //   return response.status(400).json({
    //     message: "Image URL is required in query param ?img=",
    //     error: true,
    //     success: false,
    //   });
    // }

    // const urlArr = imgUrl.split("/");
    // const image = urlArr[urlArr.length - 1];
    // const imageName = image.split(".")[0];

    // const res = await cloudinary.uploader.destroy(imageName);

    // // Remove only that image from DB
    // category.images = category.images.filter(img => img !== imgUrl);
    // await category.save();

    // return response.status(200).json({
    //   message: "Image removed successfully",
    //   result: res,
    // });

    await deleteImagesOfCategory(category);
    
    category.images = [];
    await category.save();

    return response.status(200).json({
      message: "All images removed successfully",
      success: true,
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// export async function deleteCategory(request, response) {
//   try {
//     const category = await CategoryModel.findById(request.params.id);

//     const images = category.images;

//     for (let img of images) {
//       const imgUrl = img;
//       const urlArr = imgUrl.split("/");
//       const image = urlArr[urlArr.length - 1];

//       const imageName = image.split(".")[0];

//       if (imageName) {
//         cloudinary.uploader.destroy(imageName, (error, result) => {
//           // console.log(error, result);
//         });
//       }
//     }

//     const subCategory = await CategoryModel.find({
//       parentId: request.params.id,
//     });

//     for (let i = 0; i < subCategory.length; i++) {
//       console.log(subCategory[i]._id);

//       const thirdsubCategory = await CategoryModel.find({
//         parentId: subCategory[i]._id,
//       });

//       for (let j = 0; j < thirdsubCategory.length; j++) {
//         const deletedThirdSubCat = await CategoryModel.findByIdAndDelete(
//           thirdsubCategory[j]._id,
//         );
//       }

//       const deletedSubCat = await CategoryModel.findByIdAndDelete(
//         subCategory[i]._id,
//       );
//     }

//     const deletedCat = await CategoryModel.findByIdAndDelete(request.params.id);

//     if (!deletedCat) {
//       return response.status(500).json({
//         message: "Something is wrong, Category Not Deleted!",
//         error: true,
//         success: false,
//       });
//     }

//     return response.status(200).json({
//       message: "Category Delete Successful",
//       error: false,
//       success: true,
//     });
//   } catch (error) {
//     return response.status(500).json({
//       message: error.message || error,
//       error: true,
//       success: false,
//     });
//   }
// }

// new approach recursive and better


async function deleteCategoryTree(categoryId) {
  const category = await CategoryModel.findById(categoryId);
  if (!category) return;

  // 1. Delete images of this category
  await deleteImagesOfCategory(category);

  // 2. Find children
  const children = await CategoryModel.find({ parentId: categoryId });

  // 3. Recursively delete children
  for (let child of children) {
    await deleteCategoryTree(child._id);
  }

  // 4. Delete this category from DB
  await CategoryModel.findByIdAndDelete(categoryId);
}

export async function deleteCategory(request, response) {
  try {
    const categoryId = request.params.id;

    await deleteCategoryTree(categoryId);

    return response.status(200).json({
      message: "Category and all subcategories deleted successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}


export async function updateCategory(request, response) {
  try {

    const category = await CategoryModel.findByIdAndUpdate(
      request.params.id,
      {
        name: request.body.name,
        images: imagesArr.length > 0 ? imagesArr[0] : request.body.images,
        parentId: request.body.parentId,
        parentCatName: request.body.parentCatName,
      },
      { new:true }
    );

    if(!category) {
      return response.status(500).json({
      message: "Category not found!",
      error: true,
      success: false,
    });
    }

    imagesArr = [];

    return response.status(200).json({
      message: "Category was updated",
      error: false,
      success: true,
      category: category,
    });


  } catch(error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });

  }
}