import error404 from '../../assets/images/404.png'

export default function NotFound() {
  return (
    <div style={{ backgroundColor: '#EEEEEE'}}>
        <img src={error404} alt="error 404" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
)
}