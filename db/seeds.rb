# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Review.destroy_all
Concert.destroy_all



u1 = User.create(username:"Logan", password_digest:"")
u2 = User.create(username: "Sabiha", password_digest:"")
u3 = User.create(username: "Drew", password_digest:"")
u4 = User.create(username: "Kenya", password_digest: "")
u5 = User.create(username: "Gregory", password_digest:"")
u6 = User.create(username: "Courtney", password_digest:"")
u7 = User.create(username: "Quintan", password_digest:"")
u8 = User.create(username: "Camille", password_digest:"")
u9 = User.create(username: "Ralph", password_digest:"")
u10 = User.create(username: "Tarique", password_digest:"")



c1 = Concert.create(artist_name: "Paramore", genre: "Rock", date:042123 , time: 4)
c2 = Concert.create(artist_name: "Jack Harlow", genre: "Rap", date: 042123 , time:7)
c3 = Concert.create(artist_name: "Rihanna", genre: "Pop", date:042123 , time: 10)
c4 = Concert.create(artist_name: "Nicki Minaj", genre: "Rap", date: 042223, time: 4)
c5 = Concert.create(artist_name: "Tame Impala", genre: "Alternative", date:042223, time: 7)
c6 = Concert.create(artist_name: "Beyonce", genre: "Pop", date: 042223, time:10)
c7 = Concert.create(artist_name: "Calvin Harris", genre: "Pop", date:042323 , time: 2)
c8 = Concert.create(artist_name: "Cold Play", genre: "Rock", date:042323, time: 4)
c9 = Concert.create(artist_name: "Britney Spears", genre: "Pop", date:042323 , time: 7)

r1 = Review.create(comment: "Snatched my wig!", user: u1 , concert: c6)
r2 = Review.create(comment: "What a show!", user: u2 , concert: c7)
r3 = Review.create(comment: "THIS is a performer", user: u3, concert: c3)
r4 = Review.create(comment: "Lackluster music", user: u4 , concert: c2)
r5 = Review.create(comment: "I'm such a BARB!", user: u5 , concert: c4)
r6 = Review.create(comment: "I really enjoyed this set", user: u6, concert: c5)
r7 = Review.create(comment: "AMAZING!", user: u7 , concert: c8)
r8 = Review.create(comment: "I have no words for how bad that was", user: u8 , concert: c2)
r9 = Review.create(comment: "What a comeback!", user: u9 , concert: c9)
r10 = Review.create(comment: "Performance of the decade", user: u10 , concert: c1)
r11 = Review.create(comment: "Glad I didnt have to pay for this, cause I'd be asking for a refund", user: u4, concert:c2)
r12 = Review.create(comment: "I had a blast", user: u1, concert: c7)
r13 = Review.create(comment: "SO MUCH FUN!", user: u8 , concert: c4)
