
exports.homeRoutes = (req,res)=>{
    res.render('index.ejs')
}

exports.add_user = (req,res)=>{
    res.render('add_user.ejs')
}

exports.update_user = (req,res)=>{
    res.render('update_user.ejs')
}

exports.add_order = (req,res)=>{
    res.render('add_order.ejs')
}

exports.login = (req,res)=>{
    res.render('login.ejs')
}