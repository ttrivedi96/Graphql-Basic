import { graphql } from "graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
type Course {
    ID : ID
    courseName: String
    category: String
    price: Int
    language: String
    email: String
    stack: Stack
    teachingAssists: [TeachingAssists] 
}

type TeachingAssists{
    firstName: String
    lastName: String
    experience: Int
}

enum Stack{
    WEB
    MOBILE
    OTHER
}

type Query{
    getCourse(ID: ID): Course
}

input CourseInput{
    ID : ID
    courseName: String!
    category: String
    price: Int!
    language: String
    email: String
    stack: Stack
    teachingAssists: [TeachingAssistsInput]!
}

input TeachingAssistsInput{
    firstName: String
    lastName: String
    experience: Int
}

type Mutation{
createCourse(input: CourseInput): Course
}

`);

export default schema;
