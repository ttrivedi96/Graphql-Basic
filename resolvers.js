import { nanoid } from "nanoid";

class Course {
    constructor(ID, {
        courseName, category, price, language, email, stack, teachingAssists
    }) {
        this.ID = ID
        this.courseName = courseName
        this.category = category
        this.price = price
        this.language = language
        this.email = email
        this.stack = stack
        this.teachingAssists = teachingAssists
    }
}

const courseData = {}

const resolvers = {
    getCourse: ({ ID }) => {
        return new Course(ID, courseData[ID])
    },
    createCourse: ({ input }) => {
        let ID = nanoid()
        courseData[ID] = input
        return new Course(ID, input)
    }
}

export default resolvers