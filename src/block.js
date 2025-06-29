import { registerBlockType } from '@wordpress/blocks';
import './style.css';
import edit from './edit';
import save from './save';

registerBlockType('tabernawp/responsive-image', {
    edit,
    save
});
