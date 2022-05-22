
$('#table_id').DataTable( {

    ajax: {
        url: 'https://jsonplaceholder.typicode.com/comments',
        dataSrc: ''
    },
    columns: [ 
        {data: 'postId'},  
        {data: 'id'},
        {data: 'name'},
        {data: 'email'},
        {data: 'body'},
     ] 
});