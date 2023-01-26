const SignUp = () => {
  return (
    <>
      <form>
        <input type="text" name="user name" placeholder="name" />
        <br />
        <input type="email" name="user email" placeholder="email" />
        <br />
        <input type="password" name="user password" placeholder="password" />
        <br />
        <label name="user gender">choose Gender:</label>
        <br />
        <label>
          <input type="radio" name="gender" value="MALE" />
          male
        </label>
        <label>
          <input type="radio" name="gender" value="FEMALE" />
          female
        </label>
        <br /><br/>
        <label>Skill:</label>
        <br />
        <label>
          <input type="checkbox" name="coding" value="CODING" />
          CODING{" "}
        </label>
        <br />
        <label>
          <input type="checkbox" name="guitar" value="GUITAR" />
          GUITAR{" "}
        </label>
        <br />
        <label>
          <input type="checkbox" name="cooking" value="COOKING" />
          COOKING
        </label>
        <br /><br/>
        <label name="city">choose your city:</label>
        <br />
        <select name="city" multiple>
          <option value="dehradun">dehradun</option>
          <option value="chandigarh">chandigarh</option>
          <option value="amritsar">amritsar</option>
          <option value="pathankot">pathankot</option>
          <option value="udhamsinghnagar">udhamsinghnagar</option>
        </select><br/><br/>
        <label value="address">address:</label><br/>
        <textarea name="user address" rows="4" cols="50"/><br/><br/>
        <label for="user image">upload picture:</label><br/>
        <input type="file" id="user image" name="user pic" accept="image/png, image/jpeg"></input><br/><br/>
        <label for="age">Age:</label><br/>
        <input type="number" id="age" name="user age"/><br/><br/>
        <input type="submit" value="submit"/>
        <input type="reset" value="reset"/>
      </form>
    </>
  );
};

export default SignUp;
