// No JavaScript supported
// peek() means peek next elment but pointer doesn't move (i.e. still points the next elment)
// Solution, think the iterator as the the pointer, cache next value
// Java Iterator interface reference:
// https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html
class PeekingIterator implements Iterator<Integer> {
    Integer next = null;
    Iterator<Integer> iter;

	public PeekingIterator(Iterator<Integer> iterator) {
	    // initialize any member here.
	    this.iter = iterator;
	    if (iter.hasNext()) {
	        this.next = iter.next();
	    }
	}

    // Returns the next element in the iteration without advancing the iterator.
	public Integer peek() {
        return this.next;
	}

	// hasNext() and next() should behave the same as in the Iterator interface.
	// Override them if needed.
	@Override
	public Integer next() {
	    Integer nextCache = next;
	    if (iter.hasNext()) {
	        next = iter.next();
	    } else {
	        next = null;
	    }

	    return nextCache;
	}

	@Override
	public boolean hasNext() {
	    return next != null;
	}
}
