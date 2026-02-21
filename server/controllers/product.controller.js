import ProductModel from "../models/product.model.js";

import { v2 as cloudinary } from "cloudinary";
import { error } from "console";
import fs from "fs";
import CategoryModel from "../models/category.model.js";

// Configuration
cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret, // Click 'View API Keys' above to copy your API secret
  secure: true,
});

// image upload
var imagesArr = [];
export async function uploadProductImages(request, response) {
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

// create Product
export async function createProduct(request, response) {
  try {
    const category = await CategoryModel.findById(request.body.catId);

    if (!category) {
      return res.status(400).json({ message: "Invalid category" });
    }

    let product = new ProductModel({
      name: request.body.name,
      description: request.body.description,
      images: imagesArr,
      brand: request.body.brand,
      price: request.body.price,
      oldPrice: request.body.oldPrice,
      catName: request.body.catName,
      catId: request.body.catId,
      subCatId: request.body.subCatId,
      subCat: request.body.subCat,
      thirdsubCat: request.body.thirdsubCat,
      thirdsubCatId: request.body.thirdsubCatId,
      countInStock: request.body.countInStock,
      rating: request.body.rating,
      isFeatured: request.body.isFeatured,
      discount: request.body.discount,
      productUnit: request.body.productUnit,
      size: request.body.size,
      productWeight: request.body.productWeight,
      category: category._id,
    });

    product = await product.save();
    if (!product) {
      return response.status(500).json({
        message: "Product was not saved. something is wrong!",
        error: true,
        success: false,
      });
    }

    imagesArr = [];

    return response.status(200).json({
      message: "Product created successfully",
      error: false,
      success: true,
      product: product,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get all product
export async function getAllProducts(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage);
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }

    const products = await ProductModel.find()
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        message: "Products not found. Something is wrong!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Successfully fetched all products",
      error: false,
      success: true,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get all product by Cat Id
export async function getAllProductsByCatId(request, response) {
  try {
    const filter = { catId: request.params.id };

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments(filter);
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }

    const products = await ProductModel.find({
      catId: request.params.id,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        message: "Products not found. Something is wrong!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Successfully fetched all products",
      error: false,
      success: true,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get all product by cat Name
export async function getAllProductsByCatName(request, response) {
  try {
    const filter = { catName: request.query.catName };

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments(filter);
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }

    const products = await ProductModel.find({
      catName: request.query.catName,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        message: "Products not found. Something is wrong!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Successfully fetched all products",
      error: false,
      success: true,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get all product by sub Cat Id
export async function getAllProductsBySubCatId(request, response) {
  try {
    const filter = { subCatId: request.params.id };

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments(filter);
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }

    const products = await ProductModel.find(filter)
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        message: "Products not found. Something is wrong!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Successfully fetched all products",
      error: false,
      success: true,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get all product by sub cat Name
export async function getAllProductsBySubCatName(request, response) {
  try {
    const filter = { subCat: request.query.SubCatName };

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments(filter);
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }

    const products = await ProductModel.find(filter)
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        message: "Products not found. Something is wrong!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Successfully fetched all products",
      error: false,
      success: true,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get all product by third Cat Id
export async function getAllProductsByThirdSubCatId(request, response) {
  try {
    const filter = { thirdsubCatId: request.params.id };

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments(filter);
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }

    const products = await ProductModel.find(filter)
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        message: "Products not found. Something is wrong!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Successfully fetched all products",
      error: false,
      success: true,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get all product by third cat Name
export async function getAllProductsByThirdSubCatName(request, response) {
  try {
    const filter = { thirdsubCat: request.query.ThirdSubCatName };

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments(filter);
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }

    const products = await ProductModel.find(filter)
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        message: "Products not found. Something is wrong!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Successfully fetched all products",
      error: false,
      success: true,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get all product by price (price filter logic)
export async function getAllProductsByPrice(request, response) {
  try {
    let productList = [];

    if (request.query.catId !== "" && request.query.catId !== undefined) {
      const productListArr = await ProductModel.find({
        catId: request.query.catId,
      }).populate("category");

      productList = productListArr;
    }

    if (request.query.subCatId !== "" && request.query.subCatId !== undefined) {
      const productListArr = await ProductModel.find({
        subCatId: request.query.subCatId,
      }).populate("category");

      productList = productListArr;
    }

    if (
      request.query.thirdsubCatId !== "" &&
      request.query.thirdsubCatId !== undefined
    ) {
      const productListArr = await ProductModel.find({
        thirdsubCatId: request.query.thirdsubCatId,
      }).populate("category");

      productList = productListArr;
    }

    const filteredProducts = productList.filter((product) => {
      if (
        request.query.minPrice &&
        product.price < parseInt(+request.query.minPrice)
      ) {
        return false;
      }

      if (
        request.query.maxPrice &&
        product.price > parseInt(+request.query.maxPrice)
      ) {
        return false;
      }

      return true;
    });

    return response.status(200).json({
      message: "Products filtered successfully by price.",
      error: false,
      success: true,
      products: filteredProducts,
      totalPages: 0,
      page: 0,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// function to get total pages and items
async function getTotalPages(filter, page, perPage) {
  // 1. Get the count
  const totalPosts = await ProductModel.countDocuments(filter);

  // 2. Calculate total pages (ensuring at least 1 page if you prefer, or 0)
  const totalPages = Math.ceil(totalPosts / perPage);

  // 3. Logic check: If page is requested out of bounds
  // Note: Only error if totalPages > 0. If 0, the collection is just empty.
  if (totalPages > 0 && page > totalPages) {
    return { error: "Page not found", status: 404 };
  }

  return { totalPages, totalPosts };
}

// get all product by rating
export async function getAllProductsByRating(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage) || 10;

    // 1. Build a dynamic filter object
    let filter = {};

    // Category Hierarchy Filters
    if (request.query.catId) filter.catId = request.query.catId;
    if (request.query.subCatId) filter.subCatId = request.query.subCatId;
    if (request.query.thirdsubCatId)
      filter.thirdsubCatId = request.query.thirdsubCatId;

    // Additional Filters
    if (request.query.rating) filter.rating = parseFloat(request.query.rating);

    // Price Range (Optional but common)
    if (request.query.minPrice || request.query.maxPrice) {
      filter.price = {};
      if (request.query.minPrice)
        filter.price.$gte = parseFloat(request.query.minPrice);
      if (request.query.maxPrice)
        filter.price.$lte = parseFloat(request.query.maxPrice);
    }

    // 2. Get pagination data using the built filter
    const result = await getTotalPages(filter, page, perPage);

    if (result.error) {
      return response.status(result.status).json({
        message: result.error,
        success: false,
      });
    }

    // 3. Fetch products based on the combined filter
    const products = await ProductModel.find(filter)
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 }) // Show newest products first
      .exec();

    return response.status(200).json({
      message: "Products fetched successfully",
      error: false,
      success: true,
      products: products,
      totalPages: result.totalPages,
      totalItems: result.totalPosts,
      page: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
}

// get all products count
export async function getAllProductsCount(request, response) {
  try {
    const totalProductsCount = await ProductModel.countDocuments();

    if (!totalProductsCount) {
      return response.status(500).json({
        message: "No results. Something is wrong!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "All Products count successful",
      error: false,
      success: true,
      TotalProducts: totalProductsCount,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get all featured products
export async function getAllFeaturedProducts(request, response) {
  try {
    // Build a dynamic filter object
    let filter = {};

    // Category Hierarchy Filters
    if (request.query.catId) filter.catId = request.query.catId;
    if (request.query.subCatId) filter.subCatId = request.query.subCatId;
    if (request.query.thirdsubCatId)
      filter.thirdsubCatId = request.query.thirdsubCatId;

    filter.isFeatured = true;

    const products = await ProductModel.find(filter).populate("category");

    if (!products) {
      return response.status(500).json({
        message: "Products not found. Something is wrong!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Successfully fetched all featured products.",
      error: false,
      success: true,
      products: products,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// remove product image from cloud
async function deleteImagesOfProduct(product) {
  if (!product.images || product.images.length === 0) return;

  for (let imgUrl of product.images) {
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];

    if (imageName) {
      await cloudinary.uploader.destroy(imageName);
    }
  }
}

// delete product
export async function deleteProduct(request, response) {
  try {
    const product = await ProductModel.findById(request.params.id).populate(
      "category",
    );

    if (!product) {
      return response.status(404).json({
        message: "Product Not Found",
        error: true,
        success: false,
      });
    }

    await deleteImagesOfProduct(product);

    const deletedProduct = await ProductModel.findByIdAndDelete(product._id);

    if (!deletedProduct) {
      return response.status(404).json({
        message: "Deletion Failed!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Product deleted successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
}

// get single product
export async function getProduct(request, response) {
  try {
    const product = await ProductModel.findById(request.params.id).populate(
      "category",
    );

    if (!product) {
      return response.status(404).json({
        message: "Product Not Found",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Product fetched successfully",
      success: true,
      error: false,
      product: product,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
}

// delete Images
export async function removeImageFromCloudinary(request, response) {
  try {
    // Totally Bekar

  } catch (error) {
    return response.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
}

// update Product
export async function updateProduct(request, response) {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      request.params.id,
      {
        name: request.body.name,
        description: request.body.description,
        images: imagesArr,
        brand: request.body.brand,
        price: request.body.price,
        oldPrice: request.body.oldPrice,
        catName: request.body.catName,
        catId: request.body.catId,
        subCatId: request.body.subCatId,
        subCat: request.body.subCat,
        thirdsubCat: request.body.thirdsubCat,
        thirdsubCatId: request.body.thirdsubCatId,
        countInStock: request.body.countInStock,
        rating: request.body.rating,
        isFeatured: request.body.isFeatured,
        discount: request.body.discount,
        productUnit: request.body.productUnit,
        size: request.body.size,
        productWeight: request.body.productWeight,
        category: request.body.catId,
      },
      { new: true },
    );

    if (!product) {
      return response.status(404).json({
        message: "Updation Failed!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Product updated successfully",
      success: true,
      error: false,
      product: product,
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
}
