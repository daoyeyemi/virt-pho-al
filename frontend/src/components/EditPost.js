import React from 'react';

const EditPost = () => {

    const [user, setUser] = useState({
        title: '',
        description: '',
        file: ''
    })

    const handleChange = () => {

    }

    const handleSubmit = () => {
        
    }

  return (
    <form>
        <div>
            <input className="form-control" name="title" type="text" value={} placeholder="input title here" aria-label="title" />
        </div>
        <div>
            <textarea className="form-control" name="description" type="text" value={} placeholder="input description here" rows="3"></textarea>
        </div>
        <div>
            <FileBase64 
                multiple={false} 
                // base64 is the file name
                onDone={({ base64 }) => {
                    setPost({ ...post, file: base64 })
                    console.log(post)
                }} 
            />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default EditPost;
