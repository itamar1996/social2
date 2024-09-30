import { Request } from 'express'
import TokenPayloadDTO from '../DTO/TokenPayloadDTO'

export default interface RequestWithUser extends Request{
    user:TokenPayloadDTO
}