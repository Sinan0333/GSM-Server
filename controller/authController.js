const jwt = require('jsonwebtoken');

exports.adminLogin = async (req, res) => {
    const { email, password } = req.body; 
  
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      try {

        const token = jwt.sign(
          { email: adminEmail },
          process.env.JWT_SECRET, 
          { expiresIn: '7d' } 
        );
  
        return res.status(200).json({ status:true,message: 'Login successful', token });
      } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      return res.json({ status:false, error: 'Invalid email or password' });
    }
  };