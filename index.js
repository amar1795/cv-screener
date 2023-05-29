console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]


function cviterator(values)
{
    let nextindex=0;

    return{
        next:function(){
            if(nextindex<values.length)
            {
                return{
                    value:values[nextindex++],
                    done:false
                }
            }
            else
            {
                return{
                    done:true
                }
            }
        }
    }
}


const cvdata=cviterator(data);
func1();

let next=document.getElementById('next');
next.addEventListener('click',func1);

function func1(){

    const cvvalue= cvdata.next().value;

    let image=document.getElementById('image');
    let profile=document.getElementById('profile');

    if(cvvalue != undefined)
    {
        image.innerHTML=`<img src="${cvvalue.image}">`;
        profile.innerHTML=`<ul class="list-group">
        <li class="list-group-item">${cvvalue.name}</li>
        <li class="list-group-item">${cvvalue.age}</li>
        <li class="list-group-item">${cvvalue.city}</li>
        <li class="list-group-item">${cvvalue.language}</li>
        <li class="list-group-item">${cvvalue.framework}</li>
      </ul>`
    }
    else
    {
        alert('you have reached the end of applicants');
        window.location.reload();
    }

}