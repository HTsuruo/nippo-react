import React from 'react'

const Form = () => {
  return (
    <form action="">
      <div>
        <label htmlFor=""></label>
        <input
          type="text"
          placeholder="タイトル"
          defaultValue="reactの勉強"
          name="title"
          className="input-form"
        />
        <textarea
          name="description"
          placeholder="説明を入力"
          defaultValue="todoアプリを作っています"
        ></textarea>
        <input type="submit" value="submit" />
      </div>
    </form>
  )
}

export default Form
