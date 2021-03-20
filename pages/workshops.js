import Layout from '../components/layout'
import HeroBlock from '../components/HeroBlock' 

function Workshops() {
  return (
    <Layout>
      <HeroBlock>Web Development for Beginners. Cost: $150. Dates: April 3rd + 4th, 10:00am - 2pm. In this workshop, we will take you from 0 programming experience to deploying your own web application live on the web. This course will cover HTML, CSS, an introduction to Javascript, as well as working with databases and APIs.</HeroBlock>
      <HeroBlock>Intermediate Web Development. Cost: $150. Dates: TBD. Take your application to the next level, with an in depth dive into test driven development, dynamic data and differnet deployment patterns.</HeroBlock> 
      <HeroBlock>Minecraft Plugin Development with Code Kingdoms. Cost: $150. Dates: TBD. In this course, learn how to use Code Kingdoms to program your own custom Minecraft plugins. Create a server for your friends to play with.</HeroBlock>
    </Layout>
  )
}

export default Workshops;

