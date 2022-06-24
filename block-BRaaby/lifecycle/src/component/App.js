import { FaUser, FaCalendarTimes, FaMap, FaPhone, FaLock } from 'react-icons/fa';
import { RiMailOpenFill } from 'react-icons/ri'
import { IntersectingCirclesSpinner } from 'react-epic-spinners'
import React from 'react';


function App() {
  return (
    <div className="">
          <Main />
    </div>
  );
}

  class Main extends React.Component {
    constructor(props) {
      super();
      this.state = {
        data:null,
        value: "",
        key: "name",
        img: "./logo192.png",
        test: false
      }
  }

  refresh = ()=>{
    window.location.reload();
  }

 formatPhoneNumber = ( numbers ) => {
    var cleaned = ('' +  numbers ).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return numbers
  } 

  componentDidMount() {
    this.timer = setInterval( ()  => this.setState(prevState => ({ test: !prevState.test })),
            fetch("https://randomuser.me/api/").then((res)=>res.json()).then((data)=> 
            this.setState({   
              data:data,
              value:data.results[0].login.username, img:data.results[0].picture.large
            })),
        5000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  // componentDidMount(){
  //   fetch("https://randomuser.me/api/").then((res)=>res.json()).then((data)=> this.setState({ data:data,
  //      value:data.results[0].login.username, img:data.results[0].picture.large
  //     }))
  // }

  handleMouseMove = ( { currentTarget } ) => {
    let userInfo = this.state.data.results[0]
    let { id } = currentTarget
    switch ( id ) {
      case "name" :
        return this.setState( { value: userInfo.login.username, key: id } );
      case "email":
        return this.setState( { value: userInfo.email, key: id } );
      case "age":
        return this.setState( { value: userInfo.dob.age, key: id } );
      case "location":
        return this.setState({ value: userInfo.location.street.number + " " + userInfo.location.street.name, key: id } );
      case "phone":
        return this.setState( { value: this.formatPhoneNumber(userInfo.phone), key: id } );
      case "password":
        return this.setState( { value: userInfo.login.password, key: id } )
      default:
          break;
    }
  }

  render() {
    return <main className="w-1/2 text-center fixed my-52 mx-96">
      <div className="bg-amber-300 rounded-t-lg">
        <img className="w-40 h-40 border-4 rounded-full relative left-72 top-12" src={this.state.img} alt="img" />
      </div>
      <div className="bg-purple-300 border-t-2 rounded-b-lg border-black pt-20">
        <div>
          <p>my {this.state.key} is</p>
        </div>
        <div>
              <h1 className='text-4xl m-2'> { this.state.value || "Searching User..."} </h1>
        </div>
        {
          this.state.data ?
          <div className='flex cursor-pointer text-4xl text-gray-600  justify-evenly py-6'>
            <FaUser className='hover:text-sky-500' id="name" onClick={this.handleMouseMove} />
            <RiMailOpenFill className='hover:text-sky-500' id="email" onMouseOver={this.handleMouseMove} />
            <FaCalendarTimes className='hover:text-sky-500' id="age" onMouseOver={this.handleMouseMove} />
            <FaMap className='hover:text-sky-500' id="location" onMouseOver={this.handleMouseMove} />
            <FaPhone className='hover:text-sky-500' id="phone" onMouseOver={this.handleMouseMove} />
            <FaLock className='hover:text-sky-500' id="password" onMouseOver={this.handleMouseMove} />
          </div>
          :
          <div className='flex justify-center my-3' >
            <IntersectingCirclesSpinner color="red"/>     
          </div>  
        }

        <div>
          { !this.state.data ?  <button className='border bg-blue-600 text-white p-1 px-5 my-6'>Loading...</button> : <button onClick={ this.refresh } className='border bg-blue-600 text-white p-1 px-5 my-6'>Random User</button>}
        </div>
      </div>
    </main>
  }
}
export default App;