import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
    name: String,
    age: Number,
    type: String
}))

const app = express()

mongoose.connect('mongodb://daniel:password@monguito_db:27017/animalsapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando animales...')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/create', async (_req, res) => {
  console.log('creando...')
  await Animal.create({name: 'Shiro', age: 2, type: 'cat'})
  return res.send('Animal creado')
})

app.listen(3000, () => console.log('Animals app listening on port 3000!'))