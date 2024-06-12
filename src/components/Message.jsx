const Message = ({ name }) => {
  return (
    <div>
        <h1 style={{ color: (name.length === 3) ? 'white' : 'black' }}>Hello, {name}! </h1>
    </div>
  )
}

export default Message;