import React from "react";
import "./post-list-item.css";

export default class PostListItem extends React.Component {
    render() {
        const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props;
        let classNames = "app-list-item d-flex justify-content-between";

        if (important) {
            classNames += " important";
        }
        if (like) {
            classNames += " like";
        }
        return (
            <div className={classNames}>
                <i className="fa fa-heart"></i>
                <div className="d-flex">
                    <button className="add-like" onClick={onToggleLiked}>
                        <i className="fa fa-thumbs-up"></i>
                    </button>
                    <span className="app-list-item-label">{label}</span>
                </div>
                <div className="app-list-item-actions d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm" onClick={onToggleImportant}>
                        <i className="fa fa-trophy"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-ban"></i>
                    </button>
                </div>
            </div>
        );
    }
}
