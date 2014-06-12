define(["underscore"], function(_){

    _.each([1,2,3], function(elem, index, list){
        alert("elem" + elem);
        alert("index" + index);
        alert("list" + list);
    });
});
