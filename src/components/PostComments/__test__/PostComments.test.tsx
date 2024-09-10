import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários', () => {
        render(<PostComment/>);
        
        fireEvent.change(screen.getByTestId('comment-textearea'), {
            target: {
                value: 'Primeiro Comentario'
            }
        });
        fireEvent.click(screen.getByTestId('btn-add-comment'));

        fireEvent.change(screen.getByTestId('comment-textearea'), {
            target: {
                value: 'Segundo Comentario'
            }
        });
        fireEvent.click(screen.getByTestId('btn-add-comment'));

        expect(screen.getAllByTestId('new-comment')).toHaveLength(2);
    })
});