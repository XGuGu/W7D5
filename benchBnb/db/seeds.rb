# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Bench.delete_all

u1 = User.create({username: 'starwar', password_digest: '123123123'})


b1 = Bench.create(
  {
  description: 'bench one',
  seating: 2,
  lat: 99,
  lng: 99,
  picture_url: 'http://www.wwoeooeoe.eeweewwe'
  }
)

b2 = Bench.create(
  {
  description: 'bench one',
  seating: 3,
  lat: 89,
  lng: 89,
  picture_url: 'http://www.wqwwqqwwwwe'
  }
)
