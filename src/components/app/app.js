import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form';

import './app.css'
export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			data : [
				{label: 'Going to learn React', important : true, like: false, id : '1'},
				{label: 'Going to learn JSX', important: false, like: false, id : '2'},
				{label: 'Going to learn Redux', important: false, like: false, id : '3'}
			]
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);

		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);


		this.maxId = 4;
		
	}

	deleteItem (id) {
		console.log(id);
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const before = data.slice(0, index);
			const after = data.slice(index + 1);

			const newArr = [...before, ...after];
			return {
				data : newArr
			}
		})
		
	}

	addItem(body) {
		const newItem = {
			label : body,
			important : false,
			id : this.maxId++
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data : newArr
			}
		})
	}

	onToggleImportant (id) {
		console.log(`important ${id}`);
	}

	onToggleLiked (id) {
		console.log(`like${id}`);
	}

	render () {
		return (
			<div className='app'>
				<AppHeader />
				<div className='search-panel d-flex'>
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList 
				posts = {this.state.data} 
				onDelete={this.deleteItem} 
				onToggleImportant = {this.onToggleImportant}
				onToggleLiked = {this.onToggleLiked} />
				<PostAddForm 
				onAdd={this.addItem}/>
			</div>
		)
	}
	

	
}

