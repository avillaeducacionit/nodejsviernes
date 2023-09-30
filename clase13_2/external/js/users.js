
$.get("/api/users", (users, status) => {
    users.forEach(user => {
        $("#table_body").append(`<tr>
        <th scope="row">`+ user.id +`</th>
        <td>`+ user.name +`</td>
        <td>`+ user.username +`</td>
        <td>`+ user.email +`</td>
    </tr>`);
    });
});