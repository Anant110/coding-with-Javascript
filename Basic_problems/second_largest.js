const arr=[12,56,78,90,23];

function second_largest(nums){
    let max_element=nums[0];
    let sec_el=-1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]>max_element){
            sec_el=max_element;
            max_element=nums[i];
        }
    }
    console.log(sec_el);
}

second_largest(arr);
