puts "seeding data..."

# User data
puts "seeding user data!..."
athena = User.create!(name:"Athena King", email: "kingathena@gmail.com", password:"athena123")
lucy = User.create!(name:"Lucy Hale", email: "halelucy@yahoo.com", password:"lucy123")
apollo = User.create!(name:"Apollo Vebura", email:"veburaapollo@aol.com" , password:"apollo123")
tisha = User.create!(name:"Tisha Nowel", email:"noweltisha@gmail.com", password:"tisha123")
candy = User.create!(name:"Candy Kane", email:"kanecandy@gmail.com" , password:"candy123")
puts "user data seeded!"

#Project Data
puts "seeding project data..."
limes = Project.create!(name: "Limes" , user_id: athena.id)
task_manager = Project.create!(name:"Tasker" , user_id:lucy.id)
book_keeper = Project.create!(name:"The Book Keeper" , user_id:apollo.id)
whistles = Project.create!(name:"Sparklin Whistles" , user_id:tisha.id)
cereal = Project.create!(name:"Cereal Rater" , user_id:candy.id)
puts "project data seeded!"

#Task Data
puts "seeding task data..."
header = Task.create!(title:"create header" , description: "create the header for project", deadline: "2023-03-22 2:30:00", priority:rand(1...10), user_id: athena.id ,project_id:limes.id, completed: true )
components = Task.create!(title:"create components ", description:"finish the extra react components", deadline: "2023-03-29 2:30:00", priority:rand(1...10), user_id:lucy.id ,project_id:task_manager.id, completed:true )
backend =Task.create!(title:"finish up backend" , description: "needs extra validations", deadline:"2023-03-21 5:30:00", priority:rand(1...10), user_id:apollo.id ,project_id:book_keeper.id, completed:false )
bug = Task.create!(title:"fix bug" , description:"bug in app component", deadline:"2023-03-25 2:30:00", priority:rand(1...10), user_id:tisha.id ,project_id:whistles.id, completed: false)
css = Task.create!(title:"add css", description:"app needs styling", deadline:"2023-03-20 2:30:00", priority:rand(1...10), user_id: candy.id ,project_id:cereal.id, completed: true)
render_data = Task.create!(title:"render data" , description:"render data on the main page", deadline:"2023-03-22 1:30:00", priority:rand(1...10), user_id:athena.id  ,project_id:limes.id, completed:false )
puts "task data seeded!"

#Tag data
puts "seeding tag data..."
tag_one = Tag.create!(name:"front-end" )
tag_two = Tag.create!(name:"front-end"  )
tag_three = Tag.create!(name:"back-end" )
tag_four = Tag.create!(name:"debugging" )
tag_five = Tag.create!(name:"Styling(CSS)")
tag_six = Tag.create!(name:"front-end")
puts "tag data seeded!"

#Task Tag Data
puts "seeding task tag data..."
TaskTag.create!(task_id: header.id, tag_id:tag_one.id)
TaskTag.create!(task_id:components.id, tag_id: tag_two.id)
TaskTag.create!(task_id:backend.id, tag_id:tag_three.id)
TaskTag.create!(task_id: bug.id, tag_id: tag_four.id)
TaskTag.create!( task_id:css.id, tag_id:tag_five.id)
TaskTag.create!(task_id:render_data.id, tag_id:tag_six.id)
puts "task tag data seeded!"

#Comment Data
puts "seeding comment data..."
 Comment.create!(content:"Could you make the font orange?" , user_id: athena.id, task_id: header.id, project_id:limes.id )
 Comment.create!(content:"Looks great!", user_id:lucy.id, task_id:components.id, project_id: task_manager.id )
 Comment.create!(content:"Almost finished just need a few finishing touches.", user_id: apollo.id, task_id:backend.id, project_id:book_keeper.id )
 Comment.create!(content:"Need help!!" , user_id:tisha.id, task_id: bug.id, project_id: whistles.id )
 Comment.create!(content:"Starting to look amazing!" , user_id:candy.id, task_id:css.id, project_id:cereal.id)
 Comment.create!(content:"Can someone add a filter to app?" , user_id:athena.id, task_id:render_data.id, project_id:limes.id)
puts "comment data seeded!"


puts "data seeding complete!"


