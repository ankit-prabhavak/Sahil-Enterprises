import MyListModel from "../models/myList.model.js";

// add to my list
export const addToMyListController = async (request, response) => {
  try {
    const userId = request.userId;
    const {
      productId,
      productTitle,
      image,
      rating,
      price,
      oldPrice,
      brand,
      discount,
    } = request.body;

    const item = await MyListModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (item) {
      return response.status(400).json({
        message: "Item already in My List",
        error: true,
        success: false,
      });
    }

    const MyList = new MyListModel({
      productId,
      userId,
      productTitle,
      image,
      rating,
      price,
      oldPrice,
      brand,
      discount,
    });

    const save = await MyList.save();

    if (!save) {
      return response.status(500).json({
        message: "Item was not saved!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Item successfully added to your list",
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
};

// delete from my list
export const deleteFromMyListController = async (request, response) => {
  try {
    const myListItem = await MyListModel.findById(request.params.id);

    if (!myListItem) {
      return response.status(400).json({
        message: "Item not found!",
        error: true,
        success: false,
      });
    }

    const deletedItem = await MyListModel.findByIdAndDelete(request.params.id);

    if (!deletedItem) {
      return response.status(500).json({
        message: "Item deletion failed!",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Item deletion successfully!",
      error: true,
      success: false,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getItemsFromMyListController = async (request, response) => {
  try {
    const userId = request.userId;

    const myListItems = await MyListModel.find({
      userId: userId,
    });

    if (!myListItems) {
      return response.status(500).json({
        message: "List is empty.",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      message: "Items fetch success from my list.",
      error: false,
      success: true,
      items: myListItems,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
