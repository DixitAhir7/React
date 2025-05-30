import './App.css'
import Card from './components/Card'
import './App.css'
function App() {
  const img1 = 'https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  const img2 = 'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg'
  const img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_OWcb9esUYLXKySf_ZHI7PFyAHiKZnhMDeA&s'
  const img4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2z9ct-yVeUUsg5QSI8PBm4bfkJ86cTzoeSA&s'

  return (
    <div className="container">
      <div className="row">
        <Card img={img1} />
        <Card img={img2} />
        <Card img={img3} />
        <Card img={img4} />
      </div>
    </div>
  )
}

export default App
