import Header from '../components/Header'
import IntroContainer from '../components/IntroContainer'
import MainContentContainer from '../components/MainContentContainer'
import SnakeContainer from '../components/SnakeContainer'
import StoriesContainer from '../components/StoriesContainer'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <IntroContainer></IntroContainer>
      <SnakeContainer></SnakeContainer>
      <MainContentContainer></MainContentContainer>
      <StoriesContainer></StoriesContainer>
    </div>
  )
}
