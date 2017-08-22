class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { name: "Stranger" }
    @all_assignments = {
      all_assignments: {
        assignment1: {
          title: 'xyz',
          due_on: 'Due Date',
          description: 'Some description',
          submissions: {}
        },
        assignment2: {
          title: 'abc',
          due_on: 'Due Date',
          description: 'Some description for assignment 2',
          submissions: {}
        }
      }
    }
  end
end
