import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  background-color: #ffffff;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

a:not([draggable='true']),
img:not([draggable='true']) {
  -webkit-user-drag: none;
  user-drag: none;
}

a[href^="http://"],
a[href^="https://"],
a[href^="ftp://"]
{
  -webkit-user-drag: auto;
  user-drag: auto;
}

body {
  user-select: none;
}

.container {
  padding: 5px 10px;
}

.header {
  display: flex;
  justify-content: center;
}

.input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

#url-input {
  flex: 1;
  height: 30px;
  padding: 5px 3px;
  border-radius: 2px;
  border: 1px solid #666;
  margin-bottom: 3px;
  font-family: Roboto;
}

#options-select {
  height: 30px;
  padding: 5px 3px;
  border-radius: 2px;
  border: 1px solid #666;
  cursor: pointer;
  margin-bottom: 3px;
  font-family: Roboto;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.button {
  flex: 1;
  border-radius: 2px;
  height: 30px;
  padding: 5px 10px;
  color: #000;
  font-weight: bold;
  background-color: #c32020;
  cursor: pointer;
  border: none;
}

#download-button {
  margin-right: 5px;
}

.items-list {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}

.item {
  display: flex;
  background-color: #fff;
  margin-bottom: 5px;
  border: 1px solid #000;
  border-radius: 2px;
}

.item-thumbnail {
  width: 160px;
  height: 80px;
}

.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px;
}

.item-title {
  max-width: 280px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
  white-space: nowrap;
  line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
}

.item-progress-bar {
  min-width: 190px;
  height: 15px;
}

.item-progress-bar:not([value]) {
  background-color: #fff;
}

.item-progress-bar[value] {
  -webkit-appearance: none;
  appearance: none;
}

.item-progress-bar::-webkit-progress-bar {
  background-color: #fff;
  border-radius: 3px;
}

.item-progress-bar::-webkit-progress-value {
  background-color: #c32020;
  border-radius: 3px;
}

.status-details {
  margin-top: 2px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
}

.item-status {
  margin-right: 3px;
}

.item-type {
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-top: auto;
}
`
