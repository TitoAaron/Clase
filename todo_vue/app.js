Vue.createApp({
    // Todas las aplicaciones Vue tienen un método data() que debe retornar un objeto con el estado de la aplicación 

    data() {
        return {
            todos: [],
            addTaskName: '',
            filterTodoText: ''
        }
    },

    methods: {
        addTodo() {
            // Para acceder a las propiedades del estado de la app, necesitamos usar el this

            if (!this.addTaskName) {
                return;
            }

            console.log(this.addTaskName);

            // añadir un objeto nuevo con las siguientes propiedades a 'todos'
            // id: uuidv4();
            // text: con el texto del todo
            // isCompleted: que valor debería al crear el objeto?

            this.todos.push({
                id: uuidv4(),
                text: this.addTaskName,
                isCompleted: false
            });

            this.addTaskName = "";
        },
        toggleTodo(id){
            this.todos = this.todos.map(todo => {
                if(todo.id == id){
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                }
                return todo;
            });
        }
    }
}).mount('#app');