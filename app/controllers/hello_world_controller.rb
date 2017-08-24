class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { name: "Stranger" }
    student1 = {
      name: 'Wonda Li',
      submitted_on: 'Submitted on date',
      submission: 'Lorem Ipsum Ipsum'
    }
    student2 = {
      name: 'Alice Tsai',
      submitted_on: 'Submitted on date',
      submission: 'Lorem Ipsum Ipsum'
    }
    student3 = {
      name: 'Mona Rajhans',
      submitted_on: 'Submitted on date',
      submission: 'Lorem Ipsum Ipsum'
    }
    student4 = {
      name: 'Patricia Chen',
      submitted_on: 'Submitted on date',
      submission: 'Lorem Ipsum Ipsum'
    }
    @all_assignments = {
      all_assignments: {
        assignment1: {
          title: 'xyz',
          due_on: 'Due Date',
          description: 'Some description',
          submissions: [student1, student2, student3, student4]
        },
        assignment2: {
          title: 'abc',
          due_on: 'Due Date',
          description: 'Some description for assignment 2',
          submissions: [student2, student3, student4, student1]
        }
      }
    }
  end
end
