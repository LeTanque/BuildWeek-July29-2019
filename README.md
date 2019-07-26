# Databetes v1.0.0

Databetes API docs

- [Users](#users)
	- [GET /api/users](#get-/api/users)
	


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
           "username": "Patient Zero",
           "bg_high": 7,
           "bg_low": 3,
           "bg_target_top": 7,
           "bg_target_bottom": 3,
           "height": null,
           "weight": null,
           "birthdate": null,
           "diagnosis_date": null,
           "gender": null,
           "diabetes_type": null,
       },
       {
           "id": 2,
           "username": "Patient One",
           "bg_high": 6,
           "bg_low": 4,
           "bg_target_top": 7,
           "bg_target_bottom": 3,
           "height": null,
           "weight": null,
           "birthdate": null,
           "diagnosis_date": null,
           "gender": null,
           "diabetes_type": null
       }
   ]
```

