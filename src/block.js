import { registerBlockType } from '@wordpress/blocks';
import './style.css';
import './editor.css';
import edit from './edit';
import save from './save';

registerBlockType('tabernawp/responsive-image', {
    edit,
    save
});
