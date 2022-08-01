# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Ticket.destroy_all
Artist.destroy_all
Concert.destroy_all

u1 = User.create(username: "Logan", password_digest: "12345")
u2 = User.create(username: "Sabiha", password_digest: "princess1")
u3 = User.create(username: "Admin", password_digest: "boss2")
u4 = User.create(username: "Sally", password_digest: "sallymae3")
u5 = User.create(username: "David", password_digest: "goliath3")
u6 = User.create(username: "Penelope", password_digest: "peewee12")