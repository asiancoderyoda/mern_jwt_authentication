export default {
  getTodos: () => {
    return fetch("api/users/todos").then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else {
        return { message: { msgBody: "Unauthorized" }, msgError: true };
      }
    });
  },

 
  postTodo: (todo) => {
    return fetch("api/users/todo", {
      method: "post",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else {
        return { message: { msgBody: "Unauthorized" }, msgError: true };
      }
    });
  },


};
