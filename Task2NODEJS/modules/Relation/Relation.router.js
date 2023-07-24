import {Router} from 'express'
import * as relationController from './Relation.controller.js'

const router=Router()

router.post('/relation',relationController.addRelation);
router.get('/relation/post/:post_id',relationController.getPostsOfTag);
router.get('/relation/tag/:tag_id',relationController.getTagsOfPost);

export default router;