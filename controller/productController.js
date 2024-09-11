const Product = require('../model/productModel'); // Adjust the path as needed

// Add a product
exports.addProduct = async (req, res) => {
  try {
    const { name, category, quantity, price, image, description } = req.body;
    console.log("here...");
    

    // Validate input
    if (!name || !category || !quantity || !price || !image || !description) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newProduct = new Product({ name, category, quantity, price, image, description });
    const savedProduct = await newProduct.save();

    res.status(201).json({ message: "Product added successfully", product: savedProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Edit a product
exports.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Block/Unblock a product
exports.blockProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { is_blocked } = req.body;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    product.is_blocked = is_blocked;
    await product.save();

    res.status(200).json({ message: `Product ${is_blocked ? 'blocked' : 'unblocked'} successfully`, product });
  } catch (error) {
    console.error("Error blocking/unblocking product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
