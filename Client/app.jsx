class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todos: []
		}
	}

	componentDidMount(){
		$.get("http://127.0.0.1:8080/todos",(res)=>{
        this.setState(todos: JSON.parse(res)});
      })
	}

	addHandler(e){

	}
	clickHandler(e){

	}

	render(){
		return <div>
			To Do List
			<AddItem addHandler = {this. addHandler.bind(this)} />
			<List todos = {this.todos} clickHandler = {this.addHandler.bind(this)}/>
		</div>
	}
}

var AddItem = (props) => (
	<div>
		<input type="text"> </input>
		<button type="submit"> Add </button>
	</div>
)

var List = (props) => (
	<div>
		{props.todos.map(todo => <Item todo= {todo} onClick = {props.clickHandler}/>)}
	</div>
)

var Item = (props) => (
	<div className = ""+{props.todo.priority}+', '+ 'done'+{props.todo.done}  onClick = {() => props.onClick({props.todo.id})} >
		{props.todo.event}
		{props.todo.due}
	</div>
)


ReactDOM.render(<App/>, document.getElementById('app'));