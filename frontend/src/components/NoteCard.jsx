
const NoteCard = (Props) => {
  return (
      <div className='note-card'>
          <h2 note-card-header>{Props.title}</h2>
          <p className='note-card-content'>{Props.content}</p>
          <div className='note-card-footer'>
              <div>{Props.createAt}</div>
              <div className='note-card-icons'>
                  <button>update</button>
                  <button>Delete</button>
              </div>
          </div>
      
    </div>
  )
}

export default NoteCard
