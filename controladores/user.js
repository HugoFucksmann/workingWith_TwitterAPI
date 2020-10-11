const { response } = require("express");
const { T, paramUser } = require("../params/timeline");


const getUserShow = async ( req, res ) => {

    const screen_name = req.params.screen_name;
    try {
        const data = await T.get("users/show", { screen_name }).then((res) => {
          return res.data;
        });
        return res.status(200).json({
          ok: true,
          data,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error :(',
            error: error
        })
    }

    

   
}

const getUserSearch = async ( req, res ) => {
  
  //const screen_name = req.params.screen_name;
  const q = req.params.q
  try {
    const data = await T.get("users/search", { q: 'cecicadepe' } ).then(
      (res) => {
        data = res.data;
        return data;
      }
    );
    return res.status(200).json({
      ok: true,
      data,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "error :(",
      error: error
    });
  }
}



module.exports = {
  getUserShow,
  getUserSearch,
};