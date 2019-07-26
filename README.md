# BuildWeek Demo July 29th v1.0.0

API docs

- [Users](#users)
	- [GET /api/users](#get-/api/users)
	- [GET /api/users/:id](#get-/api/users/:id)
	


# Users

## GET /api/users



	GET /api/users


### Examples

Request

```
axios.get('/api/users');
```

### Success Response

Response

```
[
    {
           "id": 1,
           "user": "Patient Zero",
       },
       {
           "id": 2,
           "user": "Patient One",
       }
   ]
```
## GET /api/users/:id



	GET /api/users/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| string			|  <p>This is for a protected route!</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| id			|  <p>User Id</p>							|

### Examples

Request

```
axios.get('/api/users/:id');
```

### Success Response

Response

```
{
    "id": 2,
    "user": "Patient One",
}
```

