import dotenv from 'dotenv'
import app from './app.js'

const PORT = process.env.PORT || 3001;

// console.log server started
app.listen(PORT, () => console.log('Server started on http://localhost:' + PORT));