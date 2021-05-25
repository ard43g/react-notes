import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list/";
import PostAddForm from "../post-add-form";
import EnterName from "../enter-name";

import "./app.css";
import PostsInfo from "../posts-info";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: "Going to learn React", important: true, like: false, id: "1" },
                { label: "Going to learn JSX", important: false, like: false, id: "2" },
                { label: "Going to learn Redux", important: false, like: false, id: "3" },
            ],
            term: "",
            filter: "all",
            user: "Привет, незнакомец!",
            changeUserName: false,
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.addName = this.addName.bind(this);
        this.onChangeName = this.onChangeName.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];
            return {
                data: newArr,
            };
        });
    }

    addName(name) {
        const newName = name;
        this.setState(() => {
            return {
                user: newName,
                changeUserName: false,
            };
        });
    }

    addItem(body) {
        let newId = null;
        const lastElem = this.state.data?.length;
        if (lastElem === 0) {
            newId = 1;
        } else newId = +this.state.data[lastElem - 1].id + 1;
        const newItem = {
            label: body,
            important: false,
            id: newId,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    }

    onChangeName() {
        this.addName("Решили сменить имя?");
        this.setState({
            changeUserName: true,
        });
    }

    onToggleImportant(id) {
        this.setState(({ data }) => {
            console.log(data);
            const index = data.findIndex((elem) => elem.id === id);
            const old = data[index];
            const newItem = { ...old, important: !old.important };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr,
            };
        });
    }

    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);
            const old = data[index];
            const newItem = { ...old, like: !old.like };

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr,
            };
        });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    filterPost(items, filter) {
        if (filter === "like") {
            return items.filter((item) => item.like);
        } else {
            return items;
        }
    }

    onUpdateSearch(term) {
        this.setState({
            term: term,
        });
    }

    onFilterSelect(filter) {
        this.setState({ filter });
    }

    render() {
        window.state = this.state;
        const { data, term, filter, user, changeUserName } = this.state;
        const liked = data.filter((item) => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return (
            <div className="app">
                <AppHeader userName={user} changeName={this.onChangeName} />
                <EnterName addName={this.addName} newName={changeUserName} />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>
                <PostsInfo liked={liked} allPosts={allPosts} />
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem} />
            </div>
        );
    }
}
