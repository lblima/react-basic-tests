import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('Actions', () => {

    describe('save comment', () => {

        it('has the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });

        it('has the correct payload', () => {
            const newComment = 'new comment';
            const action = saveComment(newComment);
            expect(action.payload).to.equal(newComment);
        });
    });
});