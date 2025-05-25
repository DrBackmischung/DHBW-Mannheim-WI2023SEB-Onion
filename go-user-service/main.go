package main

import (
	"encoding/json"
	"net/http"
	"strconv"
	"strings"
)

type User struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

var users = []User{
	{ID: 1, Name: "Go User 1", Email: "go1@example.com"},
	{ID: 2, Name: "Go User 2", Email: "go2@example.com"},
}

func getUsers(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(users)
}

func getUser(w http.ResponseWriter, r *http.Request) {
	parts := strings.Split(r.URL.Path, "/")
	id, _ := strconv.Atoi(parts[len(parts)-1])
	for _, u := range users {
		if u.ID == id {
			json.NewEncoder(w).Encode(u)
			return
		}
	}
	json.NewEncoder(w).Encode(map[string]string{"error": "User not found"})
}

func main() {
	http.HandleFunc("/users", getUsers)
	http.HandleFunc("/users/", getUser)
	http.ListenAndServe(":3002", nil)
}
