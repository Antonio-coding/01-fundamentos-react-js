import { Post } from "./Post"


export function App() {
  return (
    <div>
      <Post
        author="Thiago Neto"
        title="ReactJS - 10 conceitos básicos para iniciantes"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio et ante tincidunt tempus."
      />
      <Post
        author="Jonh Doe"
        title="Vamos falar sobre lorem"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio et ante tincidunt tempus."
      />
    </div>
  )
}

