var expect = function(val) {
    return {
        toBe : function(val){
            if(this.val === val){
                return true
            }
            return "Not Equal";
        },
        notToBe : function(val){
            if(this.val !== val){
                return true
            }
            return "Equal";
        }
    }
};

