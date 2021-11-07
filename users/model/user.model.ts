import mongooseService from '../../common/services/mongoose.service'

class UserModel {
  Schema = mongooseService.getMongoose().Schema

  userSchema = new this.Schema({
    _id: String,
    email: {
      type: String,
      require: true
    },
    password: { 
      type: String, 
      select: false,
      require: true
    },
    name: {
      type: String,
      require:true
    },
    cellPhone: {
      type: String
    },
    cpf: Number,
    cep: Number,
    address: String,
    productsInterest: [{
      name: String
    }],
  },
  { id: false, timestamps: true })

  User = mongooseService.getMongoose().model('Users', this.userSchema)
}

export default new UserModel()
