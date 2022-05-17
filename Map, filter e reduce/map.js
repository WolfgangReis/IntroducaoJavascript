const maca = {
    value: 2
};

// Map com this
const laranja = {
    value: 3
};

function mapcomthis(arr, thisArg){
    return arr.map(function(item){
        return item *this.value;
    }, thisArg)
}

const nums = [4,5];

console.log('this -> maçã', mapcomthis(nums, maca));
console.log('this -> laranja', mapcomthis(nums, laranja));

//Map sem this
function mapsemthis(arr){
    return arr.map(function(item){
        return item * 2;
    });
}

const nums2 = [2,4,6,8,10];

console.log(mapsemthis(nums2));