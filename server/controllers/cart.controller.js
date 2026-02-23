import CartProductModel from "../models/cartproduct.model.js";
import UserModel from "../models/user.model.js";

// add to cart
export const addToCartItemController = async (request, response) => {
  try {
    const userId = request.userId;
    const { productId, qty } = request.body;

    if (!productId) {
      return response.status(402).json({
        message: "Please provide productId",
        error: true,
        success: false,
      });
    }

    const checkItemCart = await CartProductModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (checkItemCart) {
      return response.status(400).json({
        message: "Item already in cart",
      });
    }

    const cartItem = new CartProductModel({
      quantity: qty ?? 1,
      userId: userId,
      productId: productId,
    });

    const save = await cartItem.save();

    const updateCartUser = await UserModel.updateOne(
      { _id: userId },
      {
        $push: {
          shopping_cart: productId,
        },
      },
    );

    return response.status(200).json({
      data: save,
      message: "Item added successfully",
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

// get the cart items
export const getCartItemController = async (request, response) => {
  try {
    const userId = request.userId;

    const cartItem = await CartProductModel.find({
      userId: userId,
    }).populate("productId");

    return response.status(200).json({
      data: cartItem,
      message: "Item fetch success.",
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

// update the cart item
export const updateCartItemController = async (request, response) => {
  try {
    const userId = request.userId;
    const { _id, qty } = request.body;

    if (!_id || !qty) {
      return response.status(400).json({
        message: "Provide _id, qty",
      });
    }

    const updateCartItem = await CartProductModel.updateOne(
      { _id: _id, userId: userId },
      { quantity: qty },
    );

    return response.status(200).json({
      message: "Item updated successfully",
      error: false,
      success: true,
      data: updateCartItem,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// delete cart item
export const deleteCartItemController = async (request, response) => {
  try {
    const userId = request.userId;
    const { _id, productId } = request.body;

    if (!_id || !productId) {
      return response.status(400).json({
        message: "Please provide cart id and product id",
        error: true,
        success: false,
      });
    }

    const deleteCartItem = await CartProductModel.deleteOne({
      _id: _id,
      userId: userId,
    });

    if (!deleteCartItem) {
      return response.status(404).json({
        message: "The Product in the cart not found!",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({
      _id: userId,
    });

    const cartItems = user?.shopping_cart;

    // const updatedUserCart = [...cartItems.slice(0, cartItems.indexOf(productId)), ... cartItems.slice(cartItems.indexOf(productId)+1)];

    // user.shopping_cart = updatedUserCart;
    user.shopping_cart = cartItems.filter(
      (id) => id.toString() !== productId.toString(),
    );
    await user.save();

    return response.status(200).json({
      message: "Item removed successfully!",
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

