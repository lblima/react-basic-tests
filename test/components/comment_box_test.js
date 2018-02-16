import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

    let component; //undefined

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has a textarea', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    it('has the correct class', () => {
        expect(component).to.have.class('commment-box');
    });

    describe('Entering some text', () => {

        let newComment;
        
        beforeEach(() => {
            newComment = 'new comment';
            component.find('textarea').simulate('change', newComment);
        });

        it('shows the text in the text area', () => {
            expect(component.find('textarea')).to.have.value(newComment);
        });
    
        it('when submitted clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value(''); 
        });
    });
});